document.addEventListener("DOMContentLoaded", function() {
    var userAgentElement = document.getElementById("user-agent");
    var generateButton = document.getElementById("generate-agent");
    var copyButton = document.getElementById("copy-agent");

    var androidVersions = ["8.0","8.1","9.0", "10.0", "11.0", "12.0", "13.0"];
    var devices = ["Redmi Note 7", "Pixel 4", "Galaxy S21", "OnePlus 9", "Huawei P30"];
    var builds = ["PPR1.180610.011", "QP1A.190711.020", "RP1A.200720.012", "SP1A.210812.015", "TP1A.220405.003"];
    var manufacturers = ["Xiaomi", "Google", "Samsung", "OnePlus", "Huawei","Redmi","Poco",];
    var networks = ["Vodafone", "Verizon", "AT&T", "T-Mobile", "Orange"];
    var fbVersions = ["205.0.0.29.99", "250.0.0.45.123", "300.0.0.50.200", "400.0.0.60.300", "450.0.0.70.400"];

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function generateUserAgent() {
        var androidVersion = getRandomItem(androidVersions);
        var device = getRandomItem(devices);
        var build = getRandomItem(builds);
        var manufacturer = getRandomItem(manufacturers);
        var network = getRandomItem(networks);
        var fbVersion = getRandomItem(fbVersions);

        var userAgent = `Dalvik/2.1.0 (Linux; U; Android ${androidVersion}; ${device} Build/${build}) [FBAN/Orca-Android;FBAV/${fbVersion};FBPN/com.facebook.orca;FBLC/en_US;FBBV/155374479;FBCR/${network};FBMF/${manufacturer};FBBD/${device.split(" ")[0]};FBDV/${device};FBSV/${androidVersion};FBCA/armeabi-v7a:armeabi;FBDM/{density=2.0,width=1080,height=2340};FB_FW/1;]`;

        userAgentElement.textContent = userAgent;
    }

    function copyUserAgent() {
        var userAgentText = userAgentElement.textContent;
        var tempInput = document.createElement("textarea");
        tempInput.value = userAgentText;
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("User Agent کپی شد!");
    }

    generateButton.addEventListener("click", generateUserAgent);
    copyButton.addEventListener("click", copyUserAgent);
    generateUserAgent();
});
