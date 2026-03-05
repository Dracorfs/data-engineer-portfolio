import Layout from "../layout/Layout";
import Landing from "../components/Landing";
import Sobremi from "../components/Sobremi";
import Proyectos from "../components/Proyectos";
import Tecnologias from "../components/Tecnologias";
import Contacto from "../components/Contacto";

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Sobremi />
      <Proyectos />
      <Tecnologias />
      <Contacto />
    </Layout>
  );
};

export default Home;
