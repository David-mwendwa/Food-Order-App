import { useRef, useState } from 'react';

import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmontIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmontIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;

/*
async function fetchURL({ canonicalURL, headers }) {
  if (/https?:.*https?:/i.test(canonicalURL)) {
    console.error('Rejecting URL', canonicalURL, `returning [];`);
    return [];
  }

  const searchURLMatch = canonicalURL.match(/\?from=(.*)&to=(.*)&page=1$/i);
  const paginationURLMatch = canonicalURL.match(
    /\?(start|from)=(\d{4}-\d{2}-\d{2}).(end|to)=(\d{4}-\d{2}-\d{2})(&page=(\d+))?$/i
  );
  let documentURLMatch = canonicalURL.match(/.+\?buttonId=(.+)/);

  if (searchURLMatch) {
    let from = moment(searchURLMatch[1], 'YYYY-MM-DD');
    let to = moment(searchURLMatch[2], 'YYYY-MM-DD');
    let page = parseInt(searchURLMatch[3]);
    let searchLink = `https://leyes.asambleanacional.gob.ec/faces/search.xhtml?from=${from.format(
      'YYYY-MM-DD'
    )}&to=${to.format('YYYY-MM-DD')}&page=${page}`;
    if (getSharedVariable('search') !== searchLink) {
      return await searchByDates({ from, to, page, canonicalURL, headers });
    }
  }
  if (paginationURLMatch) {
    let from = moment(paginationURLMatch[2]);
    let to = moment(paginationURLMatch[4]);
    let page = parseInt(paginationURLMatch[6]);
    return [await getPages({ from, to, page, canonicalURL, headers })];
  }
  if (documentURLMatch) {
    let documentButtonId = documentURLMatch[1];
    return [
      await documentContentHandler({ documentButtonId, canonicalURL, headers }),
    ];
  } else {
    return defaultFetchURL({ canonicalURL, headers });
  }
}
*/
