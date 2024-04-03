import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { styled as muiStyle } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardComponent from "../components/CardComponent";
import { CardList } from "../components/ToDoList";

export default function CustomizedSwitches({ inProgressList, recentList }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  console.log(checked);

  return (
    <Layer>
      <FormGroup>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Show All</Typography>
          <AntSwitch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography>In progress</Typography>
        </Stack>
      </FormGroup>
      <div>
        {checked === true ? (
          inProgressList.map((todo) => <CardComponent todo={todo} />)
        ) : (
          <CardList>
            {recentList?.map((todo) => {
              return <CardComponent todo={todo} />;
            })}
          </CardList>
        )}
      </div>
    </Layer>
  );
}

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

const AntSwitch = muiStyle(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#212121",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
