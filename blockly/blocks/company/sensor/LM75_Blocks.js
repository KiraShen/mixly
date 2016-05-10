'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=518;
var colorSet='#3bc647';


Blockly.Blocks.lm75 = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.MicroduinoLM75)
    this.setOutput(true, Number);

    var tip="获取一个温度值\n";
    tip+="返回一个数字值\n";
    tip+="IIC接口\n";
    this.setTooltip(tip);
    //this.setHelpUrl('https://www.microduino.cn/wiki/index.php/Main_Page/zh');

  }
};


