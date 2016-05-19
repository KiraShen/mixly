'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');

Blockly.Arduino.OLED_begin = function() {
  var branch = Blockly.Arduino.statementToCode(this, 'DO');

  Blockly.Arduino.definitions_['define_oled'] = '#include "U8glib.h"';

  var defineOled='U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_NONE);\n';
  defineOled+='#define setFont_L u8g.setFont(u8g_font_fur20)\n';
  defineOled+='#define setFont_S u8g.setFont(u8g_font_fixed_v0r)\n';
  defineOled+='#define setFont_M u8g.setFont(u8g_font_9x18)\n';


  Blockly.Arduino.definitions_['var_oled'] = defineOled;

  var flip = this.getFieldValue('FLIP');
  var code='u8g.'+flip+'();\n';
  code+='u8g.firstPage();\n'
  code+='do {\n';
  code+=branch;
  code+='} while( u8g.nextPage() );\n';
  return code;
};

Blockly.Arduino.OLED_print = function() {
  var str = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC)
  var y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC)
  var type = this.getFieldValue('TYPE');
  //var code='oled.setFont('+type+');\n';
  var code=type+';\n';
	code+='u8g.setPrintPos('+x+', '+y+');\n';
	code+='u8g.print('+str+');\n';
  return code;
};

Blockly.Arduino.OLED_print_roll = function() {
  var str = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC)
  var x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC)
  var type = this.getFieldValue('TYPE');

  Blockly.Arduino.definitions_['define_oled_x'] = 'long x_coordinate;';
  Blockly.Arduino.definitions_['define_oled_xtime'] = 'unsigned long timer_x_coordinate = millis();';

var code='if (timer_x_coordinate > millis()) timer_x_coordinate = millis();\n';
  code+=' if(millis()-timer_x_coordinate>'+x+') {\n';
  code+='    x_coordinate = x_coordinate - 4;\n';
  code+='    timer_x_coordinate = millis();\n';
  code+='  }\n';
  code+=type+';\n';
  code+='u8g.setPrintPos(x_coordinate,'+ y+');\n';
  code+='u8g.print('+str+');\n';
  return code;
};


Blockly.Arduino.OLED_simplePrint = function() {
  var str = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var code ='';
  code+='u8g.print('+str+');\n';
  return code;
};
