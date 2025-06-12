import { useState } from "react";
import { familySiteList } from "../../api/familySiteList";

import styled from "styled-components";
import SelectArrow from "../../assets/select_arrow.png";

const DropdownWrapper = styled.div`
  position: relative;
  width: 182px;
  height: 30px;
  border: 1px solid #ccc;
  text-align: left;
  background-color: #fff;
  padding: 0px 10px 0px 15px;
  display: flex;
  align-items: center;
  color: #444;
`;

const DropdownHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

const ArrowIconStyled = styled.img<{ $open: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 15px;
  height: 9px;
  margin-top: -5px;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

const DropdownList = styled.ul`
  position: absolute;
  bottom: 100%;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 300px;
  overflow-y: auto;
  z-index: 999;
  left: 0;
`;

const GroupWrapper = styled.li`
  // border-top: 1px solid #eee;
  padding: 0;
`;

const GroupTitle = styled.strong`
  font-weight: bold;
  padding: 8px 16px;
  color: #666;
  font-size: 12px;
  border-top: 1px solid #eee;
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  font-size: 14px;
  color: #222;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function FooterFamilySiteSelect() {
  {
    /* footer 사이트 select box */
  }
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <DropdownWrapper>
      <DropdownHeader onClick={toggleDropdown}>
        FAMILY SITE
        <ArrowIconStyled $open={open} src={SelectArrow} alt="arrow" />
      </DropdownHeader>
      {open && (
        <DropdownList>
          {familySiteList.map((group, idx) => (
            <GroupWrapper key={idx}>
              <GroupTitle>{group.group}</GroupTitle>
              {group.items.map((item, i) => (
                <DropdownItem key={i}>{item}</DropdownItem>
              ))}
            </GroupWrapper>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}
