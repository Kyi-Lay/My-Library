/* GAME FUNCTIONS */

// function to generate a random numeric value
// ဂဏန်းတန်ဖိုးတစ်ခုကို မတူညီသော နံပါတ်တွေထဲကနေ ရွေးပေးတဲ့ function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // function to check if player wants to fight or skip
  // ကစားသမားကတိုက်ချင်သလား၊ ကျော်ချင်သလား စစ်ဆေးပေးတဲ့ function
  function fightOrSkip() {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // ကစားသမားက အဖြေမပေးရင်၊ ပြန်ဖြေဖို့ မေးထားတာပြန်ခေါ်ပေးမယ်
    if (!promptFight) {
      window.alert("You need to provide a valid answer! Please try again.");
      return fightOrSkip();
    }
  
    // ကစားသမားရဲ့ အဖြေကို သန့်စင်ပြီး အောက်စာလုံးနဲ့ ပြောင်းပေးတယ်
    promptFight = promptFight.trim().toLowerCase();
  
    // ကစားသမားက "skip" ဆိုရင်
    if (promptFight === "skip") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // ကစားသမားက ကျော်မယ်လို့ သေချာပြောရင်
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        return true; // တိုက်ခိုက်မှုကို ကျော်ဖို့ ပြန်ပေး
      }
    }
    return false; // တိုက်ဖို့ ဆက်လုပ်မယ်ဆိုရင် ပြန်ပေး
  }
  
  // Fight function
  // တိုက်ခိုက်မှုကို ဆောင်ရွက်ပေးတဲ့ function
  function fight(enemy) {
    var isPlayerTurn = Math.random() > 0.5;
  
    // ကစားသမားနဲ့ ရန်သူနှစ်ဦးစလုံးမှာ ကျန်းမာရေးရှိနေသရင်
    while (playerInfo.health > 0 && enemy.health > 0) {
      if (isPlayerTurn) {
        if (fightOrSkip()) {
          break; // ကစားသမားကတိုက်ချင်မှ မဟုတ်ရင် ထွက်ပေါက်
        }
  
        // ကစားသမားရဲ့ တိုက်ခိုက်မှုအားအတွက် damage value ထုတ်ယူပေးတယ်
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
  
        if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!"); // ရန်သူ သေဆုံးသွားပြီဆိုတဲ့ message
          playerInfo.money += 20; // ကစားသမားအတွက် ငွေတန်ဆာငင်ထည့်ပေး
          break; // လှုပ်ရှားမှု ပြီးဆုံး
        } else {
          window.alert(enemy.name + " still has " + enemy.health + " health left."); // ရန်သူမှာ ကျန်းမာရေး အမြင့်ဆုံးကျန်ခဲ့တယ်
        }
      } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
  
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!"); // ကစားသမား သေဆုံးသွားပြီဆိုတဲ့ message
          break;
        } else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left."); // ကစားသမားမှာ ကျန်းမာရေး အမြင့်ဆုံးကျန်ခဲ့တယ်
        }
      }
      isPlayerTurn = !isPlayerTurn; // ပြန်လည်ပြောင်းပေး
    }
  }
  
  // Function to start a new game
  // ဂိမ်းအသစ်ကို စတင်ပေးမယ့် function
  function startGame() {
    playerInfo.reset(); // ကစားသမားရဲ့ အချက်အလက်တွေကို ပြန်စနစ်တကျ ပြန်လည်တပ်ဆင်ပေး
  
    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);
  
        fight(pickedEnemyObj); // ရန်သူနဲ့ တိုက်ခိုက်မှုကို စတင်ပေး
  
        if (playerInfo.health > 0 && i < enemyInfo.length - 1 && window.confirm("The fight is over, visit the store before the next round?")) {
          shop(); // တိုက်ခိုက်မှုပြီးရင် ဆိုင်သွားပြီး ဝယ်ယူမှုလုပ်ဖို့ လုပ်ဆောင်ပေး
        }
      } else {
        window.alert("You have lost your robot in battle! Game Over!"); // ကစားသမားရဲ့ ရော့ဘော့ သေဆုံးသွားပြီဆိုတဲ့ message
        break;
      }
    }
    endGame(); // ဂိမ်းအဆုံးသတ်မယ့် function ကို ခေါ်ပေး
  }
  
  // Function to end the entire game
  // ဂိမ်းကို အဆုံးသတ်ပေးတဲ့ function
  function endGame() {
    window.alert("The game has now ended. Let's see how you did!"); // ဂိမ်းပြီးဆုံးသွားပြီဆိုတဲ့ message
  
    var highScore = localStorage.getItem("highscore") || 0; // ဂိမ်းရဲ့ high score ကို localStorage မှာ သိမ်းဆည်းထားပြီး အသစ်ရောက်လာသော high score ရှိမရှိ စစ်ဆေးပေး
  
    if (playerInfo.money > highScore) {
      localStorage.setItem("highscore", playerInfo.money);
      localStorage.setItem("name", playerInfo.name);
      window.alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!"); // ဂိမ်းရဲ့ high score မှာ ကစားသမား နေရာယူသွားပြီဆိုတဲ့ message
    } else {
      window.alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!"); // ကစားသမား high score မကျော်လွှားနိုင်ဘူးဆိုတဲ့ message
    }
  
    if (window.confirm("Would you like to play again?")) {
      startGame(); // ပြန်ကစားချင်လားမေးပြီး ပြန်ကစားနိုင်အောင် startGame function ကိုခေါ်ပေး
    } else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!"); // ဂိမ်းကို ကစားခဲ့တဲ့အတွက် ကျေးဇူးတင်ပါတယ်ဆိုတဲ့ message
    }
  }
  
  // Function to go to shop between battles
  // တိုက်ခိုက်မှုအတွင်းမှာ ဆိုင်သွားဖို့ function
  function shop() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."); // ဆိုင်မှာ အတိုးတက်မှုလုပ်ဖို့ ရွေးချယ်စရာ
  
    shopOptionPrompt = parseInt(shopOptionPrompt);
  
    switch (shopOptionPrompt) {
      case 1:
        playerInfo.refillHealth(); // ကျန်းမာရေးကို ပြန်ပြည့်အောင်လုပ်ပေး
        break;
      case 2:
        playerInfo.upgradeAttack(); // တိုက်ခိုက်မှုအားကို တိုးတက်စေ
        break;
      case 3:
        window.alert("Leaving the store."); // ဆိုင်ကနေထွက်ပေါက်
        break;
      default:
        window.alert("You did not pick a valid option. Try again."); // မကျေနပ်တဲ့ ရွေးချယ်မှုကို ပြန်စမ်းကြည့်ဖို့ ပြန်ခေါ်ပေး
        shop();
        break;
    }
  }
  
  // Function to set name
  // နာမည်သတ်မှတ်ဖို့ function
  function getPlayerName() {
    var name = "";
    while (!name) {
      name = prompt("What is your robot's name?"); // ကစားသမားရဲ့ ရော့ဘော့ရဲ့ နာမည်ကို စစ်ဆေးပေး
    }
    return name;
  }
  
  /* END GAME FUNCTIONS */
  
  /* GAME INFORMATION / VARIABLES */
  
  var playerInfo = {
    name: getPlayerName(), // ကစားသမားရဲ့ နာမည်ကို သိမ်းဆည်းထားတဲ့ variable
    health: 100, // ကစားသမားရဲ့ ကျန်းမာရေး
    attack: 10, // ကစားသမားရဲ့ တိုက်ခိုက်မှု
    money: 10, // ကစားသမားရဲ့ ငွေ
    reset: function () { 
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function () {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function () {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } else {
        window.alert("You don't have enough money!");
      }
    }
  };
  
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];
  
  /* END GAME INFORMATION / VARIABLES */
  
  /* RUN GAME */
  startGame(); // ဂိမ်းကို စတင်လုပ်ဆောင်ဖို့ ဖုန်းက call မှာထည့်ပေး