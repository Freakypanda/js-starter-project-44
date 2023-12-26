#!/usr/bin/env node
import { getBrainPrimeTask, rules } from '../src/games/brainPrime.js';
import game from '../src/index.js';

game(getBrainPrimeTask, rules);
