import pandas as pd

def process_data(input_file, output_file):
    data = pd.read_csv(input_file)
    # Procesar datos aquí
    data.to_json(output_file, orient='records')

if __name__ == "__main__":
    process_data('data/raw/satellite_data.csv', 'data/processed/processed_data.json')