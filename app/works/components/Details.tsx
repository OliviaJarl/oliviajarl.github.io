import { TableContainer, Table, Tbody, Tr, Td, Center } from "@chakra-ui/react";
import { bottomMarginWork } from "@/app/constants";
interface Props {
  projectTime: string;
  role: string;
  challenge: string;
}
const Details = ({ projectTime, role, challenge }: Props) => {
  return (
    <Center marginBottom={bottomMarginWork}>
      <TableContainer w={{ base: "100%", md: "95%" }}>
        <Table variant="simple" size="md">
          <Tbody whiteSpace="pre" fontSize={{ base: "xs", md: "lg" }}>
            <Tr>
              <Td fontWeight="bold" verticalAlign="top">
                Challenge
              </Td>
              <Td whiteSpace="normal">{challenge}</Td>
            </Tr>
            <Tr borderBottom="0px">
              <Td fontWeight="bold" verticalAlign="top">
                Role
              </Td>
              <Td whiteSpace="normal">{role}</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Project time</Td>
              <Td>{projectTime}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
};

export default Details;
