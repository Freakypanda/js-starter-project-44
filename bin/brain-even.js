#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import { brainEven } from '../src/gamesRules.js';
import game from '../src/game.js';

game(brainEven, greetUser());
