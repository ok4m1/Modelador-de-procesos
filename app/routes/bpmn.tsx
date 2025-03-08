import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef } from "react";
import BpmnJS from "bpmn-js";

export const meta: MetaFunction = () => {
  return [
    { title: "Modelador BPMN" },
    { name: "description", content: "Editor para diagramas BPMN" },
  ];
};

export default function BPMN() {
  const bpmnContainerRef = useRef<HTMLDivElement>(null);
  const bpmnModelerRef = useRef<BpmnJS | null>(null);

  useEffect(() => {
    if (bpmnContainerRef.current) {
      const bpmnModeler = new BpmnJS({
        container: bpmnContainerRef.current,
      });
      bpmnModelerRef.current = bpmnModeler;

      // Cargar un diagrama BPMN vacío al iniciar
      const emptyDiagram = `<?xml version="1.0" encoding="UTF-8"?>
        <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                          xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd"
                          id="Definitions_1"
                          targetNamespace="http://bpmn.io/schema/bpmn">
          <bpmn:process id="Process_1" isExecutable="false">
          </bpmn:process>
        </bpmn:definitions>`;
      bpmnModeler.importXML(emptyDiagram).catch((err) => {
        console.error("Error al cargar el diagrama BPMN:", err);
      });

      return () => {
        bpmnModeler.destroy();
        bpmnModelerRef.current = null;
      };
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full h-full" ref={bpmnContainerRef}></div>
    </div>
  );
}
