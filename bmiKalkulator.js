const readlineSync = require('readline-sync');

function calculateBMI(weight, height) {
  // Konversi tinggi dari cm ke m
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

// Mengambil input dari pengguna
const weight = parseFloat(readlineSync.question('Masukkan berat badan Anda (kg): '));
const height = parseFloat(readlineSync.question('Masukkan tinggi badan Anda (cm): '));

// Validasi input
if (isNaN(weight) || isNaN(height)) {
  console.log('Input tidak valid. Harap masukkan angka.');
} else if (height <= 0 || weight <= 0) {
  console.log('Tinggi dan berat badan harus lebih besar dari 0.');
} else {
  const bmi = calculateBMI(weight, height);
  const category = getBMICategory(bmi);

  console.log(`BMI Anda adalah: ${bmi}`);
  console.log(`Kategori BMI: ${category}`);
}
