
import { CommunesSelectorTable } from "src/components/CommunesSelectorTable";
import { CommuneData } from "src/interfaces/Plan";

interface FormData3Props {
  communes: CommuneData[]
}

export const FormData3 = ({communes}: FormData3Props) => {

	return (
		<>
      <CommunesSelectorTable 
        communes={communes} 
      />
		</>
	);
};
