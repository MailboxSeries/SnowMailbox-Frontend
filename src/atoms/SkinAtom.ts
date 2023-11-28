import { atom } from 'recoil';

export const skinDataState = atom({
  key: 'skinDataState',
  default: {
    treeList: [
      { missionId: "1", missionStatus: true, missionChecked: true },
      { missionId: "2", missionStatus: true, missionChecked: true },
      { missionId: "3", missionStatus: false, missionChecked: false },
      { missionId: "4", missionStatus: true, missionChecked: false }
    ],
    ornamentList: [
      { missionId: "1", missionStatus: true, missionChecked: true },
      { missionId: "2", missionStatus: false, missionChecked: false },
      { missionId: "3", missionStatus: false, missionChecked: false },
      { missionId: "4", missionStatus: false, missionChecked: false }
    ],
    starList: [
      { missionId: "1", missionStatus: false, missionChecked: false },
      { missionId: "2", missionStatus: true, missionChecked: false },
      { missionId: "3", missionStatus: true, missionChecked: false },
      { missionId: "4", missionStatus: false, missionChecked: false }
    ],
    boxList: [
      { missionId: "1", missionStatus: false, missionChecked: false },
      { missionId: '2', missionStatus: false, missionChecked: false },
      { missionId: "3", missionStatus: false, missionChecked: false },
      { missionId: "4", missionStatus: false, missionChecked: false }
    ]
  }
});
