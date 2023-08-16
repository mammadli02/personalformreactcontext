import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "shared/hooks/useForm";
import { ADD_PERSON } from "shared/provider/GlobalProvider/types";
import { useGlobalState } from "shared/provider/GlobalProvider/useGlobalState";

const Create = () => {
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();

  const { form, handleFormChange, handleFormSubmit, isEmptyField } = useForm({
    initialForm: {
      FirstName: "",
      LastName:"",
      Biography:"",
      Email: "",
      Poster: "",
    },
    onSubmit: (data) => {
      dispatch({ type: ADD_PERSON, payload: data });
      toast.success("Succesfully created");
      navigate("/home");
    },
  });

  return (
    <div >
      <h1 className="text-light mb-2 pt-5">Create Page</h1>

      <div>
        <div class="mb-3">
          <img
            width={300}
            height={300}
            className="rounded mb-2"
            style={{ objectFit: "cover" }}
            src={
              form.Poster
                ? form.Poster
                : "https://i.pinimg.com/originals/6d/e8/ad/6de8ad5eca1b8686e9ca946545194062.jpg"
            }
          />
          <br />

          <label for="exampleFormControlInput1" class="form-label text-white">
            Image url
          </label>
          <input
            class="form-control"
            placeholder="url"
            name="Poster"
            onChange={handleFormChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            FirstName
          </label>
          <input
            type="name"
            class="form-control"
            placeholder="First name"
            name="FirstName"
            onChange={handleFormChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            LastName
          </label>
          <input
            type="name"
            class="form-control"
            placeholder="Last name"
            name="LastName"
            onChange={handleFormChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            name="Email"
            onChange={handleFormChange}
          />
        </div>

        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label text-white"
          >
            Biography
          </label>
          <textarea
            class="form-control"
            rows="2"
            name="Biography"
            onChange={handleFormChange}
          ></textarea>
        </div>

        <Button
          variant="success"
          disabled={isEmptyField}
          onClick={handleFormSubmit}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default Create;
