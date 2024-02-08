import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import PropTypes from "prop-types"
import '../globals.css'
const SliderComp=(props)=>{
    return(
    <form>
      <Slider.Root className="SliderRoot" defaultValue={[1]} max={360} step={1}
      value={props.value} onValueChange={props.onValueChange}>
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label={props.label}/>
      </Slider.Root>
    </form>
)}
export default SliderComp;
SliderComp.propTypes = {
  /** Applied as the aria-label value of the element with the "slider" role  */
  label: PropTypes.string.isRequired,
  /** The controlled value of the slider. */
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  /** Event handler called when the value changes. */
  onValueChange: PropTypes.func.isRequired
}
  