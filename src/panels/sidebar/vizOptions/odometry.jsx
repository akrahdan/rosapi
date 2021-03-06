import React from 'react';
import _ from 'lodash';
import CONSTANTS  from '../../../rosnav';
import OptionRow from '../../../components/optionRow';
import ShapeOptions from './shape';
import { updateOptionsUtil } from '../../../utils';
import { Input, OptionContainer, Select } from '../../../components/styled';

const {
  DEFAULT_OPTIONS_ODOMETRY,
  OBJECT_TYPE_ARROW,
  OBJECT_TYPE_AXES,
} = CONSTANTS.CONSTANTS;

class OdometryOptions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.updateOptions = updateOptionsUtil.bind(this);
  }

  render() {
    const { options: propsOptions } = this.props;
    const options = {
      ...DEFAULT_OPTIONS_ODOMETRY,
      ...propsOptions,
    };
    const {
      angleTolerance,
      keep,
      positionTolerance,
      type: shapeType,
    } = options;

    return (
      <>
        <OptionRow label="Position Tolerance">
          <Input
            name="positionTolerance"
            type="number"
            value={positionTolerance}
            data-id="positionTolerance"
            onChange={this.updateOptions}
          />
        </OptionRow>
        <OptionRow label="Angle Tolerance">
          <Input
            name="angleTolerance"
            type="number"
            data-id="angleTolerance"
            value={angleTolerance}
            onChange={this.updateOptions}
          />
        </OptionRow>
        <OptionRow label="Keep">
          <Input
            name="keep"
            type="number"
            data-id="keep"
            value={keep}
            onChange={this.updateOptions}
          />
        </OptionRow>

        <OptionRow label="Shape">
          <Select
            name="type"
            data-id="type"
            onChange={this.updateOptions}
            value={shapeType}
          >
            {_.map([OBJECT_TYPE_ARROW, OBJECT_TYPE_AXES], type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </OptionRow>

        <OptionContainer>
          <ShapeOptions options={options} updateOptions={this.updateOptions} />
        </OptionContainer>
      </>
    );
  }
}

export default OdometryOptions;
