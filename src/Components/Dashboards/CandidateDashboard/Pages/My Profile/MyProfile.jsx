import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Email, Phone, Public, Work, School, Search } from "@mui/icons-material";
import UIButton from "../../../../../Common/UIButton";
import TitledCard from "../../../../../Common/Card/TitledCard"; // Import your reusable card component

function MyProfile({ handleTabChange }) {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Header Buttons */}
      <div className="flex flex-wrap justify-start gap-2 md:justify-end">
        <UIButton onClick={() => handleTabChange("Update Profile")}>
          <EditIcon className="mr-2" />
          Update Profile
        </UIButton>
        <UIButton>
          <AutoFixHighIcon className="mr-2" />
          Generate Resume
        </UIButton>
      </div>

      {/* Profile Card */}
      <TitledCard title="My Profile">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="avatar">
            <div className="w-24 md:w-32 lg:w-40 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-xl font-bold text-center md:text-left">
              Ghamesh Rahangdale
            </h1>
            <div className="flex flex-col md:flex-row gap-2 text-sm">
              <p className="flex items-center gap-2">
                <Email /> ghamesh@example.com
              </p>
              <p className="flex items-center gap-2">
                <Phone /> +123 456 7890
              </p>
              <p className="flex items-center gap-2">
                <Public /> India
              </p>
            </div>

            <div className="mt-4">
              <h1 className="font-bold">Skills</h1>
              <p className="text-left ">Web Development, React, Node.js</p>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span>Profile Completion</span>
                <strong>25%</strong>
              </div>
              <progress
                className="progress progress-success w-full h-2"
                value="25"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </TitledCard>

      {/* Qualifications Card */}
      <TitledCard title="Qualifications">
        <div className="flex justify-between items-center">
          <UIButton
            startIcon={<AddIcon />}
            onClick={() => handleTabChange("My Qualification")}
          />
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">No data found.</div>
      </TitledCard>

      {/* Experience Card */}
      <TitledCard title="Experience">
        <div className="flex justify-between items-center">
          <UIButton
            startIcon={<AddIcon />}
            onClick={() => handleTabChange("My Experience")}
          />
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">No data found.</div>
      </TitledCard>

      {/* Job Search Requirements Card */}
      <TitledCard title="Job Search Requirements">
        <div className="mt-4 text-center text-gray-500 text-sm">No data found.</div>
      </TitledCard>
    </div>
  );
}

export default MyProfile;
