'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');

Blockly.Arduino.mCookie_AM2321 = function() {
var Tem_Hum = this.getTitleValue('direction');


// var tempHumidCode='';
// tempHumidCode+='\n';
// tempHumidCode+='\n';
// tempHumidCode+='\n';

var code='readByAM2321('+Tem_Hum+')';

Blockly.Arduino.definitions_['Wire'] = '#include <Wire.h>';
Blockly.Arduino.definitions_['AM2321'] = '#include <AM2321.h>';



// var AM2321DefineVar='';
// AM2321DefineVar+='float tempMY=0.0;';
// AM2321DefineVar+='float humidMY=0.0;';

// Blockly.Arduino.definitions_['AM2321DefineVar'] = AM2321DefineVar;

var joyName='readByAM2321';
var code1 = 'float ' +joyName+'(int num) {\n';
	code1+='	AM2321 am2321;\n';
	code1+='	am2321.read();\n';
	code1+='	float sensor_tem=am2321.temperature/10.0;\n';
	code1+='	float sensor_hum=am2321.humidity/10.0;\n';
	code1+='	delay(500);\n'
	code1+='	if(num==1) {\n';
	code1+='		return sensor_tem;\n';
	code1+='	}\n';
	code1+='	else if(num==2) {\n';
	code1+='		return sensor_hum;\n';
	code1+='	} else {\n';
	code1+='		return 0.0;\n';
	code1+='	}\n';
	code1+='}\n';


 Blockly.Arduino.definitions_[joyName] = code1; 
 return [code, Blockly.Arduino.ORDER_ATOMIC]|| '0';
};