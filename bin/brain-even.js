#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import brainEven from '../src/games/brainEven.js';
import game from '../src/index.js';

game(brainEven, greetUser());
