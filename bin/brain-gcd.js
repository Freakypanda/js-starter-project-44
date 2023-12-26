#!/usr/bin/env node
import { getBrainGcdTask, rules } from '../src/games/brainGcd.js';
import game from '../src/index.js';

game(getBrainGcdTask, rules);
