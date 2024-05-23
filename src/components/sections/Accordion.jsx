import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { RxArrowTopRight } from "react-icons/rx";

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  borderBottom: `1px solid rgb(67, 67, 69)`,
  "&::before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgb(41, 41, 43)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 42, 0, .125)",
  backgroundColor: "rgb(41, 41, 43)",
}));

const PanelContent = ({ subtitle, imageSrc }) => (
  <div className="flex flex-col gap-10 w-[50%]">
    <Typography className="text-[22px] text-white mb-2">{subtitle}</Typography>
    {imageSrc.map((src, index) => (
      <img key={index} className="w-full mb-2" src={src} alt={`Image ${index + 1}`} />
    ))}
  </div>
);

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const panels = [
    { id: "panel1", title: "Fitness", subtitle: "ClassPage" },
    { id: "panel2", title: "Food", subtitle: "Bevi" },
    { id: "panel3", title: "Fintech", subtitle: "DealClub" },
    { id: "panel4", title: "HealthTech", subtitle: "Dialuge" },
  ];
  const imageSrcs = [
    "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FThe_State_of_AI_03-2.jpg&w=1920&q=75",
    "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FInvention-day_05.jpg&w=1600&q=75",
    "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2Fhero_image_HP_5.jpg&w=1600&q=75",
    "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FCustom_software_development_03-2.jpg&w=1600&q=75",
  ];

  return (
    <div>
      {panels.map(({ id, title, subtitle }, index) => (
        <Accordion key={id} expanded={expanded === id} onChange={handleChange(id)}>
          <CustomAccordionSummary aria-controls={`${id}-content`} id={`${id}-header`}>
            <Typography className="flex w-full items-center text-white text-[40px] justify-between">
              <div className="text-[22px]">{title}</div>
              <RxArrowTopRight className="text-[22px]" />
            </Typography>
          </CustomAccordionSummary>
          <AccordionDetails className="flex items-center justify-end">
            <PanelContent
              subtitle={`A boutique fitness membership app, ClassPass provides access to in-studio workouts, beauty and wellness appointments, and on-demand exercise classes.`}
              imageSrc={imageSrcs.slice(index, index + 1)}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default CustomizedAccordions;
