import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 m-6">
      <h1 className="text-2xl font-bold text-white">FAQ</h1>
      <div>
        <Accordion
          sx={{
            backgroundColor: "#121212",
            border: " solid 1px #FFFFFF",
            color: "#FFFFFF",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#34C94B" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Is Qtify free to use</h2>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "#121212",
              background: "#FFFFFF",
            }}
          >
            <p>Yes it is 100% free, and has 0% ads</p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: "#121212",
            border: " solid 1px #FFFFFF",
            color: "#FFFFFF",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#34C94B" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Can I download and listen to songs offline?</h2>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "#121212",
              background: "#FFFFFF",
            }}
          >
            <p>Yes you can!</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
