import { useFormik } from "formik";
import GlobalMenu from "../../components/GlobalMenu";

interface IFormErrors {
  name?: string;
  description?: string;
}

const RegisterProducts = () => {
  const validate = (values: IFormErrors) => {
    const errors: IFormErrors = {};
    if (!values.name) {
      errors.name = "Campo obrigatório";
    }
    if (!values.description) {
      errors.description = "Campo obrigatório";
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validate: (values) => validate(values),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <GlobalMenu />
      <header>
        <h1>Cadastro de Produtos</h1>
      </header>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};

export default RegisterProducts;
