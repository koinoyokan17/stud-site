jQuery(document).ready(function($) {

    $("#ajaxform3").submit(function() {
    var str = $(this).serialize();
    
    $.ajax({
    type: "POST",
    url: "http://pl.setstud.in.ua/forms/form3handler.php",
    data: str,
    success: function(msg) {
    if(msg == 'OK') {
    result = '<p>Р”СЏРєСѓС”РјРѕ Р·Р° Р·Р°РїРёС‚. РњРё СЃРєРѕСЂРѕ Р·Р°С‚РµР»РµС„РѕРЅСѓС”РјРѕ.</p>';
    } else {
    result = msg;
    }
    if ($('.header__button').text() == "РЎРїСЂРѕР±СѓРІР°С‚Рё Р±РµР·РєРѕС€С‚РѕРІРЅРѕ") {
    alert('Р”СЏРєСѓС”РјРѕ Р·Р° Р·Р°РїРёС‚. РњРё СЃРєРѕСЂРѕ РЅР°РґС–С€Р»РµРјРѕ РїС–РґСЂСѓС‡РЅРёРєРё!');
    } else if ($('.header__button').text() == "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ Р±РµСЃРїР»Р°С‚РЅРѕ") {
    alert('РЎРїР°СЃРёР±Рѕ Р·Р° Р·Р°РїСЂРѕСЃ. РњС‹ СЃРєРѕСЂРѕ РІС‹С€Р»РµРј СѓС‡РµР±РЅРёРєРё!');
    }
    $('#ajaxform3 input[type="text"]').val("");
    $('#ajaxform3 input[type="email"]').val("");
    }
    });
    return false;
    });
    $("#ajaxform2").submit(function() {
    var str = $(this).serialize();
    
    $.ajax({
    type: "POST",
    url: "http://pl.setstud.in.ua/forms/form2handler.php",
    data: str,
    success: function(msg) {
    if(msg == 'OK' && ($('.header__button').text() == "РЎРїСЂРѕР±СѓРІР°С‚Рё Р±РµР·РєРѕС€С‚РѕРІРЅРѕ")) {
    result = '<p>Р”СЏРєСѓС”РјРѕ Р·Р° Р·Р°РїРёС‚. РќР°С€ РјРµРЅРµРґР¶РµСЂ РѕР±РѕРІвЂСЏР·РєРѕРІРѕ Р· Р’Р°РјРё Р·РІвЂСЏР¶РµС‚СЊСЃСЏ!</p>';
    } else if (msg == 'OK' && ($('.header__button').text() == "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ Р±РµСЃРїР»Р°С‚РЅРѕ")) {
    result = '<p>РЎРїР°СЃРёР±Рѕ Р·Р° Р·Р°РїСЂРѕСЃ. РќР°С€ РјРµРЅРµРґР¶РµСЂ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ СЃ Р’Р°РјРё СЃРІСЏР¶РµС‚СЃСЏ!</p>';
    } else {
    result = msg;
    }
    $('#form2-result').html(result);
    $('#ajaxform2 input[type="text"]').val("");
    }
    });
    return false;
    });
    $("#ajaxform4").submit(function() {
    var str = $(this).serialize();
    
    $.ajax({
    type: "POST",
    url: "http://pl.setstud.in.ua/forms/form4handler.php",
    data: str,
    success: function(msg) {
    if(msg == 'OK') {
    result = '<p>Р”СЏРєСѓС”РјРѕ Р·Р° Р·Р°РїРёС‚. РњРё СЃРєРѕСЂРѕ Р·Р°С‚РµР»РµС„РѕРЅСѓС”РјРѕ.</p>';
    } else {
    result = msg;
    }
        if ($('.header__button').text() == "РЎРїСЂРѕР±СѓРІР°С‚Рё Р±РµР·РєРѕС€С‚РѕРІРЅРѕ") {
    alert('Р”СЏРєСѓС”РјРѕ Р·Р° Р·Р°РїРёС‚. РќР°С€ РјРµРЅРµРґР¶РµСЂ РѕР±РѕРІвЂСЏР·РєРѕРІРѕ Р· Р’Р°РјРё Р·РІвЂСЏР¶РµС‚СЊСЃСЏ!');
    } else if ($('.header__button').text() == "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ Р±РµСЃРїР»Р°С‚РЅРѕ") {
    alert('РЎРїР°СЃРёР±Рѕ Р·Р° Р·Р°РїСЂРѕСЃ. РќР°С€ РјРµРЅРµРґР¶РµСЂ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ СЃ Р’Р°РјРё СЃРІСЏР¶РµС‚СЃСЏ!');
    }
    
    $('#ajaxform4 input:not([type="submit"])').val("");
    $('#ajaxform4 textarea').val("");
    }
    });
    return false;
    });
    $("#ajaxform1").submit(function() {
    var str = $(this).serialize();
    
    $.ajax({
    type: "POST",
    url: "http://pl.setstud.in.ua/forms/form1handler.php",
    data: str,
    success: function(msg) {
    if(msg == 'OK') {
    result = '<p>Р”СЏРєСѓС”РјРѕ Р·Р° Р·Р°РїРёС‚. РњРё СЃРєРѕСЂРѕ Р·Р°С‚РµР»РµС„РѕРЅСѓС”РјРѕ.</p>';
    } else {
    result = msg;
    }
    if ($('.header__button').text() == "РЎРїСЂРѕР±СѓРІР°С‚Рё Р±РµР·РєРѕС€С‚РѕРІРЅРѕ") {
    alert('Р”СЏРєСѓС”РјРѕ Р·Р° Р·Р°РїРёС‚. РќР°С€ РјРµРЅРµРґР¶РµСЂ РѕР±РѕРІвЂСЏР·РєРѕРІРѕ Р· Р’Р°РјРё Р·РІвЂСЏР¶РµС‚СЊСЃСЏ!');
    } else if ($('.header__button').text() == "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ Р±РµСЃРїР»Р°С‚РЅРѕ") {
    alert('РЎРїР°СЃРёР±Рѕ Р·Р° Р·Р°РїСЂРѕСЃ. РќР°С€ РјРµРЅРµРґР¶РµСЂ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ СЃ Р’Р°РјРё СЃРІСЏР¶РµС‚СЃСЏ!');
    }
    $('#ajaxform1 input[type="text"]').val("");
    $('#ajaxform1 input[type="email"]').val("");
    $('#ajaxform1 input[type="checkbox"]').prop( "checked", false );
    $('#ajaxform1 textarea').val("");
    }
    });
    return false;
    });
    });