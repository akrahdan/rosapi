import React from 'react';
import _ from 'lodash';
import CONSTANTS  from '../../../rosnav';
import OptionRow from '../../../components/optionRow';
import { updateOptionsUtil } from '../../../utils';
import { Input, Select } from '../../../components/styled';

const { DEFAULT_OPTIONS_MAP, MAP_COLOR_SCHEMES } = CONSTANTS.CONSTANTS;

class MapOptions extends React.Component {
  constructor(props) {
    super(props);
    this.updateOptions = updateOptionsUtil.bind(this);
  }

  render() {
    const { options: propsOptions } = this.props;
    const options = {
      ...DEFAULT_OPTIONS_MAP,
      ...propsOptions,
    };
    const { alpha, colorScheme, drawBehind } = options;
    return (
      <>
        <OptionRow label="Alpha">
          <Input
            type="number"
            name="alpha"
            data-id="alpha"
            value={alpha}
            onChange={this.updateOptions}
          />
        </OptionRow>
        <OptionRow label="Color Scheme">
          <Select
            name="colorScheme"
            data-id="colorScheme"
            onChange={this.updateOptions}
            value={colorScheme}
          >
            {_.map(MAP_COLOR_SCHEMES, scheme => {
              return (
                <option key={scheme} value={scheme}>
                  {scheme}
                </option>
              );
            })}
          </Select>
        </OptionRow>
        <OptionRow label="Draw Behind">
          <Input
            type="checkbox"
            name="drawBehind"
            data-id="drawBehind"
            value={drawBehind}
            onChange={this.updateOptions}
          />
        </OptionRow>
      </>
    );
  }
}

export default MapOptions;
