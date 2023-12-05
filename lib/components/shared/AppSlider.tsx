import { Slider, styled } from "@mui/material";

interface Mark {
  value: number;
  label: string;
}

const StyledSlider: any = styled(Slider)(
  ({ theme, color }) => `
  && .MuiSlider-rail {
    height:8px;
    background:#fff;
    opacity: 0.3;
  }
    && .MuiSlider-markLabel {
      color: rgba(133,133,133,1);
      font-size: 16px;
      font-weight: 700;
    }
    && .MuiSlider-valueLabel {
        padding:0;
        background:none;
        transform: ${
          theme.breakpoints.up("sm") ? `translateY(-4px)` : `translateY(-2px)`
        };
        top:30px;
        font-size: 16px;
        font-weight: 700;
        color:#fff;
    }
    && .MuiSlider-thumb {
        border:none;
        width:20px;
        height:20px;
        background-color:#000;
        outline:8px solid #FFD05D;
    }
    && .MuiSlider-track {
        border:none;
        height:8px;
        background: linear-gradient(to right, #FF5C01, #FFD25F);
    }
    && .MuiSlider-mark {
        display:none;
    }
  `
);

/**
 * tick text
 * @param {number} value
 * @return {string}
 */
const valuetext = (value: number): string => {
  return String(value);
};

/**
 * display text
 * @param {Mark[]} marks
 * @param {number} value
 * @return {string}
 */
function valueLabel(marks: Mark[], value: number) {
  /** give value to find label */
  const dict: { [key: number]: string } = {};
  for (let i = 0; i < marks.length; i++) {
    dict[marks[i].value] = marks[i].label;
  }
  return dict[value];
}

interface Props {
  totalPages: number;
}
const AppSlider = ({ totalPages }: Props) => {
  const marks: Mark[] = Array(6)
    .fill(null)
    .map((d, dIndex) => ({
      value: dIndex * 20,
      label: String(Math.floor(totalPages / 5) * dIndex + 0),
    }));

  return (
    <StyledSlider
      aria-label="Always visible"
      defaultValue={80}
      aria-valuetext={valuetext}
      step={20}
      marks={marks}
      valueLabelDisplay="on"
      valueLabelFormat={(value: number) => {
        return valueLabel(marks, value);
      }}
    />
  );
};

export default AppSlider;
