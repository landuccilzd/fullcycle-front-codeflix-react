import { useScroll } from "@/hooks/useScroll";
import { renderHook, act } from "@testing-library/react";

describe("Testes para a funcao useScroll", () => {
  it("deve responder a eventos de scroll para a posicao 100", () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(true);
  });

  it("deve responder a eventos de scroll para a posicao 0", () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(false);
  });
});
