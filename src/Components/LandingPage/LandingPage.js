import React, { useReducer, useState, useEffect } from "react";
import { useFetch } from "./Hooks";
import Auth from "../HomePage/Auth";
import countryCodeToFlag from "country-code-to-flag";
import SimpleMap from "../LandingPage/GoogleMap";
const LandingPage = props => {
  return (
    <div className='home__wrapper'>
      <div className='home__background'>
        <div className='user_wrapper'>
          {UserGenerator("medium", 20, "__landingpage", "LANDINGPAGE")}
        </div>
      </div>
      <div className='home__loginDetails'>{NameForm(props)}</div>
    </div>
  );
};

const NameForm = props => {
  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value
    };
  }
  const initialState = {
    name: "",
    password: ""
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const { name, password } = state;
  return (
    <form method='post' action=''>
      <h3 id='logo'>Random User</h3>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        name='name'
        id='username'
        placeholder='Type in your username..'
        autoComplete='off'
        required
        value={name}
        onChange={onChange}
      />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        placeholder='Enter your password..'
        autoComplete='off'
        required
        value={password}
        onChange={onChange}
      />
      <a className='forgot' href='#'>
        Forgot Password?
      </a>
      <a className='register' href='#'>
        Register
      </a>
      <input
        onClick={() => {
          Auth.login(() => {
            props.history.push("/app");
          });
        }}
        type='submit'
        name='submit'
        value='Log In'
      />
    </form>
  );
};

export const UserGenerator = (size, NoU, className, page) => {
  // * - Settings -
  // * size - small,medium,large
  // * NoU - NumberOfUsers
  // * className - for CSS reference
  // * userData - Boolean
  const [data, loading] = useFetch(
    `https://randomuser.me/api/?results=${NoU || 20}`
  );

  const [clicked, setClicked] = useState("");

  function clickHandler(e) {
    return data.map(user => {
      if (clicked === e.currentTarget.id) {
        setClicked("");
      } else if (user.name.first === e.currentTarget.id) {
        setClicked(e.currentTarget.id);
      }
    });
  }
  return (
    <div>
      {loading ? (
        // ****** Todo need spinner logo w/ fadeout
        "loading..."
      ) : (
        <div className={`user_wrapper` && className}>
          {data.map((user, i) => (
            <div className='user_container'>
              <img
                className='user_image'
                src={user.picture[size] || user.picture.medium}
                key={user.id.value || i}
              />
              <div>
                {page !== "LANDINGPAGE" && (
                  <div className='detail_container'>
                    <div className='content_aligner'>
                      <span className='user_name'>{user.name.first}</span>{" "}
                      <span className='user_dob'>{user.dob.age}</span>
                      <br></br>
                      <span className='user_dob'>{user.location.country}</span>
                    </div>
                    <div className='content_aligner'>
                      <div className='user_location'>
                        <div className='country_flag'>
                          {countryCodeToFlag(user.nat)}
                        </div>

                        <button
                          className='usermap_cta'
                          id={user.name.first}
                          onClick={e => clickHandler(e)}>
                          Click me
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {clicked === user.name.first && (
                <div className='teszt'>
                  <SimpleMap />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
