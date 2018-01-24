$path = "./android/app/src/main/assets"
If(!(test-path $path))
{
New-Item -ItemType Directory -Force -Path $path
}

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
# Invoke-WebRequest "http://localhost:8088/index.android.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"