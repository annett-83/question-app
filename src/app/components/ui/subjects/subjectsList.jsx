/* import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Subject from "./subject";
import {
  getQualitiesLoadingStatus,
  getQulitiesByIds,
  loadQualitiesList,
} from "../../../store/qualities";
import { useDispatch, useSelector } from "react-redux";

const SubjectsList = ({ qualities }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getQualitiesLoadingStatus());
  const qualitiesList = useSelector(getQulitiesByIds(qualities));
  useEffect(() => {
    dispatch(loadQualitiesList());
  }, []);

  if (isLoading) return "Loadind ...";

  return (
    <>
      {qualitiesList.map((qual) => (
        <Quality key={qual._id} {...qual} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.array,
};

export default QualitiesList;
 */
