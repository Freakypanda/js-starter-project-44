#!/usr/bin/env node
import { getBrainCalcTask, rules } from '../src/games/brainCalc.js';
import game from '../src/index.js';

game(getBrainCalcTask, rules);
