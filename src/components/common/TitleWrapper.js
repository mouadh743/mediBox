import { StyleSheet, Text } from "react-native"
import { scale } from "../../helpers/functions"
import { colors } from "../../themes"

const Styles = StyleSheet.create({
    container:{
        fontFamily:'WorkSans-SemiBold',
        fontWeight:'600',
        fontSize:scale(22),
        lineHeight:scale(32),
        color:colors.Dark
    }
})
const TitleWrapper = ({children,style})=>{
    return(<Text style={[Styles.container,style]}>{children}</Text>)
}
export default TitleWrapper