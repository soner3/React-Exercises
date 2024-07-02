import { useEffect, useState } from "react";

interface CurrencyAPIType {
  rates: Record<string, number>;
}

export default function CurrencyConverter() {
  const [output, setOutput] = useState("Output");
  const [value, setValue] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [convertCurrency, setConvertCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleChangeBase(e: React.ChangeEvent<HTMLSelectElement>) {
    setBaseCurrency(e.target.value);
  }

  function handleChangeConvert(e: React.ChangeEvent<HTMLSelectElement>) {
    setConvertCurrency(e.target.value);
  }

  useEffect(() => {
    async function changeCurrency() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&base=${baseCurrency}`
        );

        const data: CurrencyAPIType = await res.json();
        setOutput(String(data.rates[convertCurrency]));
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (value === "") {
      return;
    }
    if (baseCurrency === convertCurrency) {
      setOutput(value);
      return;
    }

    changeCurrency();
  }, [value, baseCurrency, convertCurrency]);

  return (
    <div className="border-2 border-black p-4 rounded-xl shadow-xl">
      <div className="mb-1">
        <label htmlFor="value" className="text-lg">
          Value:
        </label>
        <input
          id="value"
          type="text"
          className="border-2 border-black rounded-xl p-1 ml-1"
          value={value}
          onChange={handleChangeValue}
          disabled={isLoading}
        />
      </div>
      <div className="mb-1">
        <label htmlFor="baseCurrency">Base Currency</label>
        <select
          className="ml-1"
          name="baseCurrency"
          id="baseCurrency"
          value={baseCurrency}
          onChange={handleChangeBase}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <div className="mb-1">
        <label htmlFor="convertCurrency">Convert Currency</label>
        <select
          className="ml-1"
          name="baseCurrency"
          id="convertCurrency"
          value={convertCurrency}
          onChange={handleChangeConvert}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      {isLoading}
      <p className="text-2xl font-medium">{output}</p>
    </div>
  );
}
