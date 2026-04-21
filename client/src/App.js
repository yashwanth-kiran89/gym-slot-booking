import React, { useState, useEffect, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./styles/theme";
import { getSlots } from "./api";
import Header from "./components/Header";
import SlotGrid from "./components/SlotGrid";
import SlotDetail from "./components/SlotDetail";
import Toast from "./components/Toast";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: ${theme.bg};
    color: ${theme.text};
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: ${theme.bg}; }
  ::-webkit-scrollbar-thumb { background: ${theme.border}; border-radius: 99px; }
`;

const PageWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 80px;
`;

export default function App() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchSlots = useCallback(async () => {
    try {
      const data = await getSlots();
      setSlots(data);
    } catch {
      showToast("Failed to load slots", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSlots();
  }, [fetchSlots]);

  const handleBack = () => {
    setSelected(null);
    fetchSlots();
  };

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header slots={slots} showStats={!selected} />

        {!selected ? (
          <SlotGrid slots={slots} loading={loading} onSelect={setSelected} />
        ) : (
          <SlotDetail slot={selected} onBack={handleBack} onToast={showToast} />
        )}
      </PageWrapper>

      <Toast toast={toast} />
    </>
  );
}