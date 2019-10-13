import kute from "kute.js";
import "kute.js/kute-svg";
import "kute.js/kute-css";
import "kute.js/kute-attr";
import "kute.js/kute-text";

import Vivus from 'vivus';

kute.fromTo("#main",{translate3d:[0,0,0]},{translate3d:[0,0,-100]},{parentPerspective: 100}).start();

new Vivus('line', {duration: 200});