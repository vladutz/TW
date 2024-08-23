var cookieName= "UniversalBack";

var WorldSpeed
var UnitSpeed

const domain = document.domain;

var tomorrowTranslated = "tomorrow";
var atTranslated = "at";
var prevUnit = "noble";
var explor = "spy";
var attackTranslated = "Attack";


var baseUnitSpeed = {
"Noble" : 18,
        "B\351lier" : 15,
        "\311p\351e" : 11,
        "Hache" : 9,
        "Lourd" : 6,
        "L\351ger" : 5,
        "\311claireur" : 5,
}
var baseUnitSpeed = {
    "noble" : 18,
    "ram" : 15,
    "sword" : 11,
    "axe" : 9,
    "hcav" : 6,
    "lcav" : 5,
    "spy" : 5,
}
if(domain.includes("tribalwars.com.pt") || domain.includes("tribalwars.com.br")){
    tomorrowTranslated = "amanhã";
    atTranslated = "às";
    prevUnit = "nobre";
    explor = "btd";
    attackTranslated = "Ataque";
    baseUnitSpeed = {
        "nobre" : 18,
        "aríete" : 15,
        "espada" : 11,
        "machado" : 9,
        "cavp" : 6,
        "cavl" : 5,
        "btd" : 5,
    }
}
else if(domain.includes("tribalwars.net") || domain.includes("tribalwars.co.uk")){
    tomorrowTranslated = "tomorrow";
    atTranslated = "at";
    prevUnit = "noble";
    explor = "spy";
    attackTranslated = "Attack";

    baseUnitSpeed = {
        "noble" : 18,
        "ram" : 15,
        "sword" : 11,
        "axe" : 9,
        "hcav" : 6,
        "lcav" : 5,
        "spy" : 5,
    }
}
else if(domain.includes("guerretribale.fr")){
    tomorrowTranslated = "Demain";
    atTranslated = "le";
    prevUnit = "Noble";
    explor = "\311claireur";
    attackTranslated = "Attaque";

    baseUnitSpeed = {
        "Noble" : 18,
        "B\351lier" : 15,
        "\311p\351e" : 11,
        "Hache" : 9,
        "Lourd" : 6,
        "L\351ger" : 5,
        "\311claireur" : 5,
    }
}
else if(domain.includes("triburile.ro")){
    tomorrowTranslated = "mâine";
    atTranslated = "la";
    prevUnit = "GN";
    explor = "Spionează";
    attackTranslated = "Atac";

    baseUnitSpeed = {
        "GN" : 18,
        "Berbec" : 15,
        "Spadă" : 11,
        "Topor" : 9,
        "HCav" : 6,
        "LCav" : 5,
        "Spionează" : 5,
    }
}
else if(domain.includes("guerrastribales.es")){
    tomorrowTranslated = "mañana";
    atTranslated = "a las";
    prevUnit = "noble";
    explor = "Espía";
    attackTranslated = "Ataque";

    baseUnitSpeed = {
        "noble" : 18,
        "Ariete" : 15,
        "espada" : 11,
        "hacha" : 9,
        "lourde" : 6,
        "CAVL" : 5,
        "Espía" : 5,
    }
}
else if(domain.includes("tribalwars.nl")){
    tomorrowTranslated = "morgen";
    atTranslated = "om";
    prevUnit = "Edel.";
    explor = "Verk.";
    attackTranslated = "Aanval";

    baseUnitSpeed = {
        "Edel." : 18,
        "Ram" : 15,
        "Zwaard" : 11,
        "Bijl" : 9,
        "ZCav." : 6,
        "LCav." : 5,
        "Verk." : 5,
    }
}
else if(domain.includes("fyletikesmaxes.gr")){
    tomorrowTranslated = "αύριο";
    atTranslated = "στις";
    prevUnit = "Î‘ÏÎ¹ÏƒÏ„Î¿ÎºÏÎ¬Ï„Î·Ï‚";
    explor = "Î‘Î½Î¹Ï‡Î½ÎµÏ…Ï„Î®Ï‚";
    attackTranslated = "Επίθεση";

    baseUnitSpeed = {
        "Î‘ÏÎ¹ÏƒÏ„Î¿ÎºÏÎ¬Ï„Î·Ï‚" : 18,
        "ÎºÏÎ¹ÏŒÏ‚" : 15,
        "ÎžÎ¯Ï†Î¿Ï‚" : 11,
        "Τσεκούρι" : 9,
        "heavy" : 6,
        "Î•Î».Î¹Ï€Ï€." : 5,
        "Î‘Î½Î¹Ï‡Î½ÎµÏ…Ï„Î®Ï‚" : 5,
    }
}
else if(domain.includes("divokekmeny.cz")){
    tomorrowTranslated = "zítřek";
    atTranslated = "v";
    prevUnit = "Šlechta";
    explor = "Špeh";
    attackTranslated = "Útok";

    baseUnitSpeed = {
        "Šlechta" : 18,
        "Beranidlo" : 15,
        "Meč" : 11,
        "Sekera" : 9,
        "TK" : 6,
        "LK" : 5,
        "Špeh" : 5,
    }
}
else if(domain.includes("plemiona.pl")){
    tomorrowTranslated = "jutro";
    atTranslated = "o";
    prevUnit = "Szlachcic";
    explor = "Zwiad";
    attackTranslated = "Atak";

    baseUnitSpeed = {
        "Szlachcic" : 18,
        "Taran" : 15,
        "Miecz" : 11,
        "Topór" : 9,
        "CK" : 6,
        "LK" : 5,
        "Zwiad" : 5,
    }
}
else if(domain.includes("voyna-plemyon.ru")){
    tomorrowTranslated = "завтра";
    atTranslated = "om";
    prevUnit = "Дворянин";
    explor = "Лазутчик";
    attackTranslated = "Атака";

    baseUnitSpeed = {
        "Дворянин" : 18,
        "Таран" : 15,
        "Меч" : 11,
        "Топор" : 9,
        "ТКав" : 6,
        "ЛКав" : 5,
        "Лазутчик" : 5,
    }
}
else if(domain.includes("klanhaboru.hu")){
    tomorrowTranslated = "holnap"; // talvez n
    atTranslated = "om";
    prevUnit = "FN";
    explor = "Kém";
    attackTranslated = "Támadás";

    baseUnitSpeed = {
        "FN" : 18,
        "Kos" : 15,
        "Kard" : 11,
        "Bárdos" : 9,
        "NLov" : 6,
        "KLov" : 5,
        "Kém" : 5,
    }
}
else if(domain.includes("tribals.it")){
    tomorrowTranslated = "domani";
    atTranslated = "alle";
    prevUnit = "nobile";
    explor = "Esploratore";
    attackTranslated = "Attacco";

    baseUnitSpeed = {
        "nobile" : 18,
        "Arieti" : 15,
        "Spada" : 11,
        "Ascia" : 9,
        "PCav" : 6,
        "LCav" : 5,
        "Esploratore" : 5,
    }
}
else if(domain.includes("tribalwars.ae")){
    atTranslated = " غدا";
    prevUnit = "نبيل";
    explor = " كشافة";
    attackTranslated = "هجوم";
        
    baseUnitSpeed = {
        "نبيل" : 18,
        "محطمة الحائط" : 15,
        "سيف" : 11,
        "فأس" : 9,
        "الفرسان الثقيلة" : 6,
        "الفرسان الخفيفة" : 5,
        "كشافة" : 5,
    }
}


function getTimeLeftInSecond(row){
    var TimeString = $(row).find('td')[6].innerText;
    var split = TimeString.split(':');
    return parseInt(split[2])+60*parseInt(split[1])+3600*parseInt(split[0]);
}

function getSender(row){
    return $(row).find('td')[3].innerText; // TODO A Testzer
}

function getDistance(row){
    var coordAtt = getAttacker(row).split("|");
    var coordDef = getDefender(row).split("|");
    var exactDistance = Math.sqrt(Math.pow(parseInt(coordAtt[0])-parseInt(coordDef[0]),2) + Math.pow(parseInt(coordAtt[1])-parseInt(coordDef[1]),2));
    return exactDistance;
}
function getDefender(row){
    var a = $(row).find('td')[1].innerText; // TODO A Testzer
    tab = a.split(')');
    return tab[tab.length-2].split('(')[1];
}

function getAttacker(row){
    var a = $(row).find('td')[2].innerText; // TODO A Testzer
    tab = a.split(')');
    return tab[tab.length-2].split('(')[1];
}

function getTravelTimeInSecond(distance, unit){
return Math.round(distance * (60*baseUnitSpeed[unit]/WorldSpeed/UnitSpeed));
}

function getBackTime(row){
    var impact = conversionImpacttoDate(row);
    var travel = getTravelTimeInSecond(getDistance(row), findAttackSpeed(row));
    var launchDate = new Date(impact.getFullYear(), impact.getMonth(), impact.getDate(), impact.getHours(), impact.getMinutes(), parseInt(impact.getSeconds())+travel);
    var dateStringSplit = launchDate.toString().split(" ");
    return dateStringSplit[1] + ". " + dateStringSplit[2] + ", " + dateStringSplit[4];
}


function findAttackSpeed(row){
    var TimeLeft = getTimeLeftInSecond(row);
    var distance = getDistance(row);
    var previousUnit = prevUnit;

    for(var unit in baseUnitSpeed){
        if(getTravelTimeInSecond(distance, unit)<TimeLeft) return previousUnit;
        previousUnit = unit;
    }
    return explor;
}


function getImpactTime(row){
    return  $(row).find('td')[5].innerText; // TODO A Testzer
}

function hasNumbers(t)
{
    return /\d/.test(t);
}


function conversionImpacttoDate(row){
    var impact = getImpactTime(row);
    console.log(impact + " oi");
    var tab = impact.split(" ");
    var dateActuelle = new Date();
    console.log(tab);
    var last = tab[tab.length-1];
    var index = tab.length-1;
    if(!hasNumbers(last)){
        index = index-1;
    }

    switch(tab[0]){
        case tomorrowTranslated:
            return new Date(dateActuelle.getFullYear(), dateActuelle.getMonth(), parseInt(dateActuelle.getDate())+1, tab[index].split(":")[0], tab[index].split(":")[1], tab[index].split(":")[2]);
        case atTranslated:
            return new Date(tab[1].split(".")[2], parseInt(tab[1].split(".")[1])-1, tab[1].split(".")[0],tab[3].split(":")[0], tab[3].split(":")[1], tab[3].split(":")[2]);
        default:
            return new Date(dateActuelle.getFullYear(), dateActuelle.getMonth(), parseInt(dateActuelle.getDate()), tab[index].split(":")[0], tab[index].split(":")[1], tab[index].split(":")[2]);

    }
    throw new Error("oops, error in data conversion")
}

function findAttackLaunch(row){
    var impact = conversionImpacttoDate(row);
    var travel = getTravelTimeInSecond(getDistance(row), findAttackSpeed(row));
    var launchDate = new Date(impact.getFullYear(), impact.getMonth(), impact.getDate(), impact.getHours(), impact.getMinutes(), parseInt(impact.getSeconds())-travel)
    var dateStringSplit = launchDate.toString().split(" ")
    return dateStringSplit[1] + ". " + dateStringSplit[2] + ", " + dateStringSplit[4]
}

function getFinalString(row){
    return findAttackSpeed(row) + " " + getAttacker(row) + " " + getSender(row) + " " + findAttackLaunch(row) + " | " + getBackTime(row)
}


//----------
function editAttackName($row) {
    var $button = $row.find('.rename-icon');
    $button.click();
}
function renameAttackName($row, name) {
    var $input = $row.find('.quickedit-edit input[type="text"]');
    $input.val(name);
}
function submitAttackName($row) {
    var $button = $row.find('.quickedit-edit input[type="button"]');
    $button.click();
}


function RenameAttack(){
    var i=0;
    $('tr.nowrap').each(function(){
            if ($.trim($(this).find('td')[0].innerText).includes(attackTranslated)){
            setTimeout(delayed, i*150,$(this));
            i++;
        }
    });
}

function delayed(param) {
    editAttackName(param);
    renameAttackName(param, getFinalString(param));
    submitAttackName(param);
}

function main(){
    $.ajax({
        type: 'GET',
        url: '/interface.php?func=get_config',
        dataType: 'xml',
        success: function(xml) {
            UnitSpeed = $(xml).find('unit_speed').text();
            WorldSpeed = $(xml).find('speed').text();

            RenameAttack();
        },
        error: function() {
            UI.ErrorMessage('An error occurred while processing XML file.');
        }
    });
}

main()