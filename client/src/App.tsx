import { useState, useRef } from "react";
import "./App.css";
import axios from "axios";

// Types

function App() {
  const [formData, setFormData] = useState({
    name: "",
    language: "",
    stack: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getResponse();
  };

  //API Request
  const getResponse = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${REACT_APP_SERVER_URL}/api/generate}`,
        formData
      );
      console.log(data);
      if (data.status === "success") {
        //save response in content variable
        const { message } = data;

        setContent(data.message);
        //set loading to false
        setIsLoading(false);
        // Scroll to the Content Div.
        contentRef.current?.scrollIntoView({ behavior: "smooth" });
        // Empty Fields
        setFormData({ name: "", language: "", stack: "" });
      }
      // setContent(data);
    } catch (error: any) {
      alert("Something went wrong, please try again later.");
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="app">
      {isLoading ? (
        <div className="preloader-container">
          <div className="loader">Compiling Results...</div>
        </div>
      ) : (
        <div className="main">
          <div className="inner-container">
            <div className="content-container">
              <h3>
                App Name Goes here (Still struggling for a good name &#128514;)
              </h3>
              <p>
                Are you new to programming and development and not sure where to
                start? Are you wondering what specific languages or technologies
                you should focus on? Are you trying to decide whether web
                development is the right path for you or not?
                <br /> Well, you will get most of your answers here within 10
                seconds. Fill in the fields and see the magic!
              </p>

              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label>Let us know your Name</label>
                  <input
                    type="text"
                    required
                    name="animal"
                    className="form-input"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>
                    Name the programming language you already know/would like to
                    know{" "}
                  </label>
                  <select
                    className="form-input"
                    value={formData.language}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, language: e.target.value })
                    }>
                    <option value="">Choose Option</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="PHP">PHP</option>
                    <option value="C#">C#</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                    <option value="Dart">Dart</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>What are you more interested in?</label>
                  <select
                    className="form-input"
                    value={formData.stack}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, stack: e.target.value })
                    }>
                    <option value="">Choose Option</option>
                    <option value="Full Stack web development">
                      Full Stack web development
                    </option>
                    <option value="Frontend web development">
                      Frontend web development
                    </option>
                    <option value="Backend web development">
                      Backend web development
                    </option>
                    <option value="Mobile App development">
                      Mobile App development
                    </option>
                    <option value="Desktop App development">
                      Desktop App development
                    </option>
                    <option value="Game development">Game development</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                  </select>
                </div>

                <button type="submit" className="submit-btn">
                  Generate Data
                </button>
              </form>
              {/* Adding ref on the div */}
              <div className="result" ref={contentRef}>
                {content.split("\n").map((item, i) => {
                  return (
                    <p key={i}>
                      {item} <br />
                    </p>
                  );
                })}
              </div>
              <p className="information">
                This project is developed using chat GPT-3 API. The API is
                currently in beta. You can check out the API here:{" "}
                <a
                  href="https://beta.openai.com/docs/api-reference/introduction"
                  target="_blank"
                  rel="noreferrer">
                  https://beta.openai.com/docs/api-reference/introduction
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
