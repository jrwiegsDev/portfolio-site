import { useState } from 'react';
import { FILTER_TYPES } from '../constants';

/**
 * Custom hook to manage project filter state
 * Handles main filter (SWE/Data), sub-filters (Python, SQL, etc.), and project type (Professional/Skills)
 */
export function useProjectFilters() {
  const [mainFilter, setMainFilter] = useState(FILTER_TYPES.MAIN.SWE);
  const [dataSubFilter, setDataSubFilter] = useState(FILTER_TYPES.DATA_SUB.PYTHON);
  const [projectTypeFilter, setProjectTypeFilter] = useState(FILTER_TYPES.PROJECT_TYPE.PROFESSIONAL);

  const handleMainFilterClick = (filter) => {
    setMainFilter(filter);
    if (filter === FILTER_TYPES.MAIN.DATA) {
      setDataSubFilter(FILTER_TYPES.DATA_SUB.PYTHON);
    }
    setProjectTypeFilter(FILTER_TYPES.PROJECT_TYPE.PROFESSIONAL);
  };

  const handleDataSubFilterClick = (filter) => {
    setDataSubFilter(filter);
    setProjectTypeFilter(FILTER_TYPES.PROJECT_TYPE.PROFESSIONAL);
  };

  const handleProjectTypeFilterClick = (filter) => {
    setProjectTypeFilter(filter);
  };

  return {
    mainFilter,
    dataSubFilter,
    projectTypeFilter,
    handleMainFilterClick,
    handleDataSubFilterClick,
    handleProjectTypeFilterClick
  };
}
