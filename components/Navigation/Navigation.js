import { useApp } from "../../hooks/useContext";
import { useRoute } from "../../hooks/useRoute";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
    const { isAuth } = useApp();
    const routing = useRoute(isAuth);
    return (
        <NavigationContainer>
          { routing }
        </NavigationContainer>
    )
}

export default Navigation
