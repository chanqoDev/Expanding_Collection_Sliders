/**
 * import main Expanding Collection function
 */
import createExpandingCollection from './expanding-collection';
/**
 * import Expanding Collection styles
 */
import './expanding-collection.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Expanding Collection element
 */
const sliderEl = document.querySelector('.expanding-collection');

/**
 * Init Expanding Collection
 *
 * argument: pass .expanding-collection element
 */
createExpandingCollection(sliderEl);

/**
 * import main Posters Slider function
 */
import createPostersSlider from './posters-slider';
/**
 * import Posters Slider styles
 */
import './posters-slider.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Posters Slider element
 */
const sliderElm = document.querySelector('.posters-slider');

/**
 * Init Posters Slider
 *
 * argument: pass .posters-slider element
 */
createPostersSlider(sliderElm);
