import {createStackNavigatior} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import StartGameScreen from "../screens/StartGameScreen";
import SecondScreen from "../screens/SecondScreen";


const screens = {
    Home: {
        screen: StartGameScreen
    },
    SecondScreen: {
        screen: SecondScreen
    }
}

const HomeStack = createStackNavigatior(screens);

export default createAppContainer(HomeStack);