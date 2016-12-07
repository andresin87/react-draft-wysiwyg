/**
 * Created by alucas on 25/11/16.
 */
import { configure , setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

function loadStories() {
  require('../components/stories.js');
}

configure(loadStories, module);