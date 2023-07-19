import React, { useState } from "react";

function Form() {
  const [enteredMail, setMail] = useState("");
  const [enteredMessage, setMessage] = useState("");
  const [isValid, setValid] = useState(true);
  const [enteredWarning, setWarning] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (validRegex.test(enteredMail)) {
      const mailtoLink = `mailto:adam_keyes@adamkeyes.com?subject=Contact Inquiry&body=${encodeURIComponent(
        enteredMessage
      )}`;
      window.open(mailtoLink);
      window.open("mailto:adam_keyes@adamkeyes.com?subject=Contact Inquiry");
      return;
    } else {
      setValid(false);
      setWarning(
        <div className="relative">
          <label className="text-red text-right text-xs pt-2">
            Sorry, invalid format here
          </label>
          <span className="absolute bottom-4 right-0 material-symbols-outlined text-red">
            error
          </span>
        </div>
      );
    }
  };

  const emailHandler = (event) => {
    const mail = event.target.value;
    setMail(mail);
  };

  const messageHandler = (event) => {
    const mail = event.target.value;
    setMessage(mail);
  };

  const clearInput = (event) => {
    event.target.value = "";
    setMail("");
    setValid(true);
    setWarning("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input onFocus={clearInput} type="text" placeholder="NAME" />

        <input
          className={isValid ? "inputField" : "inputField error"}
          onChange={emailHandler}
          onFocus={clearInput}
          type="text"
          placeholder="EMAIL"
        />
        {enteredWarning}

        <input
          onChange={messageHandler}
          onFocus={clearInput}
          id="message"
          type="text"
          placeholder="MESSAGE"
        />

        <div className="text-right pt-6 pb-14">
          <button type="submit">
            <p className=" text-white tracking-[2.29px] decoration_underline">
              SEND MESSAGE
            </p>
          </button>
        </div>
        <hr />
      </form>
    </div>
  );
}

export default Form;
