import Expanders from "./Expander";

function App() {
  return (
    <>
      <main>
        <Expanders
          openStart={false}
          minWords={20}
          colorButton={"yellow"}
          containerBorder={"1px solid purple"}
          containerBackground={"green"}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit
          repellendus voluptates voluptate, facere amet ad soluta quaerat totam
          nostrum doloribus deserunt ea distinctio assumenda nobis natus odit?
          Hic, quasi. Provident quae eligendi tempora quasi ipsam recusandae
          magnam, similique voluptatibus adipisci. Excepturi nostrum, eos
          placeat natus sit ullam corrupti nihil repudiandae sed quod at rerum
          minus aliquid optio fugiat cum?
        </Expanders>
        <hr />
        <Expanders
          openStart={true}
          minWords={20}
          colorButton={"red"}
          containerBorder={"1px solid black"}
          containerBackground={"lightgray"}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit
          repellendus voluptates voluptate, facere amet ad soluta quaerat totam
          nostrum doloribus deserunt ea distinctio assumenda nobis natus odit?
          Hic, quasi. Provident quae eligendi tempora quasi ipsam recusandae
          magnam, similique voluptatibus adipisci. Excepturi nostrum, eos
          placeat natus sit ullam corrupti nihil repudiandae sed quod at rerum
          minus aliquid optio fugiat cum?
        </Expanders>
        <hr />
        <Expanders
          openStart={false}
          minWords={20}
          colorButton={"blue"}
          containerBorder={"1px solid green"}
          containerBackground={"white"}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit
          repellendus voluptates voluptate, facere amet ad soluta quaerat totam
          nostrum doloribus deserunt ea distinctio assumenda nobis natus odit?
          Hic, quasi. Provident quae eligendi tempora quasi ipsam recusandae
          magnam, similique voluptatibus adipisci. Excepturi nostrum, eos
          placeat natus sit ullam corrupti nihil repudiandae sed quod at rerum
          minus aliquid optio fugiat cum?
        </Expanders>
      </main>
    </>
  );
}

export default App;
