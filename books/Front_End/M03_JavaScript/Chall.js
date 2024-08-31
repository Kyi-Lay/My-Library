function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    // အသုံးပြုမည့် အက္ခရာများကို စုစည်းခြင်း
    let characters = '';
    if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) characters += '0123456789';
    if (symbols) characters += '!@#$%^&*()_-+=[]{}|;:,.<>/?';

    // Password ဖြစ်ပေါ်စေရန် လုပ်ဆောင်ခြင်း
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').textContent = password;
}

// function copyToClipboard() {
//     const password = document.getElementById('password');
//     password.select();
//     document.execCommand('copy');
// }
