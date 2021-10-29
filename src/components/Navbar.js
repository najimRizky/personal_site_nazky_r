import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import logo from "../assets/Logo.png";
const Navbar = () => {
    return ( 
        <Box className="navBar" bg='black' px={8} py={5} color="white" w="100%">
            <Image src={logo} htmlWidth="150px" objectFit="cover" />
        </Box>
    );
}
 
export default Navbar;