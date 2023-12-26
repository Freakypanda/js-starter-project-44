#!/usr/bin/env node
import { getBrainEvenTask, rules } from '../src/games/brainEven.js';
import game from '../src/index.js';

game(getBrainEvenTask, rules);
