import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./form.scss";

let Form = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const request = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1050"
    );
    const response = await request.json();
    const names = response.results.map((item) => ({
      value: item.name,
      label: item.name,
    }));
    setPokemons(names);
  };

  const [submitEnable, setsubmitEnable] = useState(true);

  const [Info, setInfo] = useState({});

  const forSubmit = (e) => {
    e.preventDefault();
    let usersInformation = localStorage.getItem("userInformation");
    if (!usersInformation) {
      usersInformation = [];
    } else {
      usersInformation = JSON.parse(usersInformation);
    }
    usersInformation.push(Info);

    localStorage.setItem("userInformation", JSON.stringify(usersInformation));

    setInfo({});
  };

  useEffect(() => {
    const keys = Object.keys(Info);

    if (keys.length >= 7) {
      setsubmitEnable(false);
      keys.forEach((item) => {
        if (!Info[item]) {
          setsubmitEnable(true);
        }
      });
    } else {
      setsubmitEnable(true);
    }
  }, [Info]);

  const [email, SetEmail] = useState(true);

  const validateemail = (value) => {
    const emailvalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailvalidation.test(value)) {
      SetEmail(true);
    } else {
      SetEmail(false);
    }
  };

  return (
    <section className="singup">
      <h1 className="titulo">SING UP FORM</h1>
      <div>
        <form className="form" onSubmit={(e) => forSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input
            className={Info.name == "" ? "name redborder" : "name"}
            placeholder="Name"
            onChange={(event) => setInfo({ ...Info, name: event.target.value })}
            value={Info.name || ""}
          ></input>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className={Info.email == "" || !email ? "email redborder" : "email"}
            placeholder="Email"
            onChange={(event) => {
              setInfo({ ...Info, email: event.target.value });
              validateemail(event.target.value);
            }}
            value={Info.email || ""}
          ></input>
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            className={Info.phone == "" ? "phone redborder" : "phone"}
            placeholder="Phone Number"
            onChange={(event) =>
              setInfo({ ...Info, phone: event.target.value })
            }
            value={Info.phone || ""}
          ></input>
          <label htmlFor="birthday" className="visible textbi">
            Birthday
          </label>
          <input
            type="date"
            className={Info.birthday == "" ? "birthday redborder" : "birthday"}
            placeholder="birthday"
            onChange={(event) =>
              setInfo({ ...Info, birthday: event.target.value })
            }
            value={Info.birthday || ""}
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            className={Info.message == "" ? "message redborder" : "message"}
            placeholder="Message"
            onChange={(event) =>
              setInfo({ ...Info, message: event.target.value })
            }
            value={Info.message || ""}
          ></textarea>
          <div className={Info.sex == "" ? "sexo redborder" : "sexo"}>
            <label htmlFor="male" className="visible">
              Male
            </label>
            <input
              type="radio"
              name="sex"
              value="male"
              id="male"
              onChange={(event) => setInfo({ ...Info, sex: "male" })}
              checked={Info.sex == "male" ? true : false}
            ></input>
            <label htmlFor="female" className="visible">
              Female
            </label>
            <input
              type="radio"
              name="sex"
              value="female"
              id="female"
              onChange={(event) => setInfo({ ...Info, sex: "female" })}
              checked={Info.sex == "female" ? true : false}
            ></input>
          </div>
          <label className="visible"></label>
          <Select
            options={pokemons}
            placeholder="Choose your favorite pokemon"
            onChange={(event) => setInfo({ ...Info, pokemon: event.value })}
            value={
              Info.pokemon
                ? {
                    value: Info.pokemon,
                    label: Info.pokemon,
                  }
                : ""
            }
          />
          <div>
            <button
              type="submit"
              className="submit"
              disabled={submitEnable || !email}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
