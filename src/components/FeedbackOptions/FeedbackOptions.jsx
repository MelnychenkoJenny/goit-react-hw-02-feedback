import {
  BsEmojiSunglasses,
  BsEmojiNeutral,
  BsEmojiAngry,
  BsEmojiWink,
} from 'react-icons/bs';
import {OptionList, OptionBtn} from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onUpdateStatus }) => {

  return (
    <OptionList>
      {options.map(option => (
        <li key={option}>
          <OptionBtn type="button" typeName={option} onClick={() => onUpdateStatus(option)}>
            {option}
            {option === 'good' ? (
              <BsEmojiSunglasses />
            ) : option === 'neutral' ? (
              <BsEmojiNeutral />
            ) : option === 'bad' ? (
              <BsEmojiAngry />
            ) : (
              <BsEmojiWink />
            )}
          </OptionBtn>
        </li>
      ))}
    </OptionList>
  );
};
