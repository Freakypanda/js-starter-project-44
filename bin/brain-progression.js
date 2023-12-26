#!/usr/bin/env node
import { getBrainProgressionTask, rules } from '../src/games/brainProgression.js';
import game from '../src/index.js';

game(getBrainProgressionTask, rules);
